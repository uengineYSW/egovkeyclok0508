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
// @RequestMapping(value="/applications")
public class ApplicationController {

    @Resource(name = "applicationService")
    private ApplicationService applicationService;

    @GetMapping("/applications")
    public List<Application> getAllApplications() throws Exception {
        // Get all applications via ApplicationService
        return applicationService.getAllApplications();
    }

    @GetMapping("/applications/{id}")
    public Optional<Application> getApplicationById(
        @PathVariable String 민원번호
    ) throws Exception {
        // Get a application by ID via ApplicationService
        return applicationService.getApplicationById(민원번호);
    }

    @PostMapping("/applications")
    public Application createApplication(@RequestBody Application application)
        throws Exception {
        // Create a new application via ApplicationService
        return applicationService.createApplication(application);
    }

    @PutMapping("/applications/{id}")
    public Application updateApplication(
        @PathVariable String 민원번호,
        @RequestBody Application application
    ) throws Exception {
        // Update an existing application via ApplicationService
        return applicationService.updateApplication(application);
    }

    @DeleteMapping("/applications/{id}")
    public void deleteApplication(@PathVariable String 민원번호)
        throws Exception {
        // Delete a application via ApplicationService
        applicationService.deleteApplication(민원번호);
    }
}
