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
// @RequestMapping(value="/analysis1s")
public class Analysis1Controller {

    @Resource(name = "analysis1Service")
    private Analysis1Service analysis1Service;

    @GetMapping("/analysis1s")
    public List<Analysis1> getAllAnalysis1s() throws Exception {
        // Get all analysis1s via Analysis1Service
        return analysis1Service.getAllAnalysis1s();
    }

    @GetMapping("/analysis1s/{id}")
    public Optional<Analysis1> getAnalysis1ById(@PathVariable Long id)
        throws Exception {
        // Get a analysis1 by ID via Analysis1Service
        return analysis1Service.getAnalysis1ById(id);
    }

    @PostMapping("/analysis1s")
    public Analysis1 createAnalysis1(@RequestBody Analysis1 analysis1)
        throws Exception {
        // Create a new analysis1 via Analysis1Service
        return analysis1Service.createAnalysis1(analysis1);
    }

    @PutMapping("/analysis1s/{id}")
    public Analysis1 updateAnalysis1(
        @PathVariable Long id,
        @RequestBody Analysis1 analysis1
    ) throws Exception {
        // Update an existing analysis1 via Analysis1Service
        return analysis1Service.updateAnalysis1(analysis1);
    }

    @DeleteMapping("/analysis1s/{id}")
    public void deleteAnalysis1(@PathVariable Long id) throws Exception {
        // Delete a analysis1 via Analysis1Service
        analysis1Service.deleteAnalysis1(id);
    }
}
