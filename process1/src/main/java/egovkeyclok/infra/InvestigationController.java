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
// @RequestMapping(value="/investigations")
public class InvestigationController {

    @Resource(name = "investigationService")
    private InvestigationService investigationService;

    @GetMapping("/investigations")
    public List<Investigation> getAllInvestigations() throws Exception {
        // Get all investigations via InvestigationService
        return investigationService.getAllInvestigations();
    }

    @GetMapping("/investigations/{id}")
    public Optional<Investigation> getInvestigationById(
        @PathVariable String name
    ) throws Exception {
        // Get a investigation by ID via InvestigationService
        return investigationService.getInvestigationById(name);
    }

    @PostMapping("/investigations")
    public Investigation createInvestigation(
        @RequestBody Investigation investigation
    ) throws Exception {
        // Create a new investigation via InvestigationService
        return investigationService.createInvestigation(investigation);
    }

    @PutMapping("/investigations/{id}")
    public Investigation updateInvestigation(
        @PathVariable String name,
        @RequestBody Investigation investigation
    ) throws Exception {
        // Update an existing investigation via InvestigationService
        return investigationService.updateInvestigation(investigation);
    }

    @DeleteMapping("/investigations/{id}")
    public void deleteInvestigation(@PathVariable String name)
        throws Exception {
        // Delete a investigation via InvestigationService
        investigationService.deleteInvestigation(name);
    }

    @RequestMapping(
        value = "/investigations/{id}/update",
        method = RequestMethod.PUT,
        produces = "application/json;charset=UTF-8"
    )
    public Investigation updateInvestigation(
        @PathVariable(value = "id") String name,
        @RequestBody UpdateInvestigationCommand updateInvestigationCommand,
        HttpServletRequest request,
        HttpServletResponse response
    ) throws Exception {
        return investigationService.updateInvestigation(
            updateInvestigationCommand
        );
    }
}
