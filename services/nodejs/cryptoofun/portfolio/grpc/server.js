const { Server } = require('@grpc/grpc-js');
const { get, update } = require('../services/portfolioService');

const messages = require('genproto/portfolio_pb');
const services = require('genproto/portfolio_grpc_pb');

function askPortfolio(call, callback) {
  get(call.request.getUserId())
    .then(portfolio => {
      const portfolioList = [];
      portfolio.forEach(item => {
        const pItem = new messages.PortfolioItem();
        pItem.setTicker(item.ticker);
        pItem.setCost(item.cost);
        pItem.setAmount(item.amount);
        portfolioList.push(pItem);
      });
      var response = new messages.AskPortfolioResponse();
      response.setPortfolioList(portfolioList);
      callback(null, response);
    })
    .catch(err => {
      callback(err, null);
    });
}

function modifySingleTicker(call, callback) {
  update(
    call.request.getUserId(),
    call.request.getTicker(),
    call.request.getCost(),
    call.request.getAmount()
  )
    .then(() => {
      var response = new messages.ModifySingleTickerResponse();
      callback(null, response);
    })
    .catch(err => {
      callback(err, null);
    });
}

const server = new Server();
server.addService(services.PortfolioServiceService, { askPortfolio, modifySingleTicker });

module.exports = server;
