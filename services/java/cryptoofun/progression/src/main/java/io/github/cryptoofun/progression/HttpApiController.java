package io.github.cryptoofun.progression;

import io.github.cryptoofun.progression.dto.GetLevelByUserIdResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HttpApiController {

    @Autowired
    private ExperienceRecordsRepository xpRecordsRepository;

    @GetMapping("/{userId}")
    public ResponseEntity<GetLevelByUserIdResponse> getLevelByUserId(@PathVariable String userId) {
        var recordOpt = xpRecordsRepository.findById(userId);
        if (recordOpt.isEmpty()) {
            var newbieResponse = new GetLevelByUserIdResponse(userId, 0, 0);
            return new ResponseEntity<>(newbieResponse, HttpStatus.OK);
        }
        var record = recordOpt.get();
        var response = new GetLevelByUserIdResponse(
                record.getUserID(),
                record.getTotalXP(),
                record.getLevel());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
