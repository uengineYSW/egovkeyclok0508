package egovkeyclok.infra;

import egovkeyclok.domain.*;
import egovkeyclok.service.*;
import java.util.List;
import java.util.Optional;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @RequestMapping(value="/processings")
public class ProcessingController {

    @Resource(name = "processingService")
    private ProcessingService processingService;

    @GetMapping("/processings")
    public List<Processing> getAllProcessings() throws Exception {
        // Get all processings via ProcessingService
        return processingService.getAllProcessings();
    }

    @GetMapping("/processings/{id}")
    public Optional<Processing> getProcessingById(@PathVariable String name)
        throws Exception {
        // Get a processing by ID via ProcessingService
        return processingService.getProcessingById(name);
    }

    @PostMapping("/processings")
    public Processing createProcessing(@RequestBody Processing processing)
        throws Exception {
        // Create a new processing via ProcessingService
        return processingService.createProcessing(processing);
    }

    @PutMapping("/processings/{id}")
    public Processing updateProcessing(
        @PathVariable String name,
        @RequestBody Processing processing
    ) throws Exception {
        // Update an existing processing via ProcessingService
        return processingService.updateProcessing(processing);
    }

    @DeleteMapping("/processings/{id}")
    public void deleteProcessing(@PathVariable String name) throws Exception {
        // Delete a processing via ProcessingService
        processingService.deleteProcessing(name);
    }

    @RequestMapping(
        value = "/processings/{id}//process",
        method = RequestMethod.PUT,
        produces = "application/json;charset=UTF-8"
    )
    public Processing updateProcessing(
        @PathVariable(value = "id") String name,
        @RequestBody UpdateProcessingCommand updateProcessingCommand,
        HttpServletRequest request,
        HttpServletResponse response
    ) throws Exception {
        return processingService.updateProcessing(updateProcessingCommand);
    }
}
