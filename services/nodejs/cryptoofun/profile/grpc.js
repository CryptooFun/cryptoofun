const { Server } = require('@grpc/grpc-js');
const { auth0Manager } = require('./idp');

const messages = require('genproto/profile_pb');
const services = require('genproto/profile_grpc_pb');

async function getProfileInfoByUserIds(call, cb) {
  const profileInfoList = [];

  try {
    const userIdsList = call.request.getUserIdsList().map(id => `user_id:"${id}"`);
    const query = userIdsList.join(' OR ');
    const users = await auth0Manager.getUsers({ q: query });

    // * Does not retain the order of user IDs
    for (const user of users) {
      const profileInfo = new messages.ProfileInfo();
      profileInfo.setUserId(user.user_id);
      profileInfo.setUsername(user.username);
      profileInfoList.push(profileInfo);
    }
  } catch (err) {
    return cb(err, null);
  }

  var response = new messages.GetProfileInfoByUserIdsResponse();
  response.setProfileInfoList(profileInfoList);
  cb(null, response);
}

const grpcServer = new Server();
grpcServer.addService(services.ProfileServiceService, {
  getProfileInfoByUserIds,
});

module.exports = { grpcServer };
