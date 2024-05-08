package egovkeyclok.service.impl;

import egovkeyclok.domain.Application;
import egovkeyclok.domain.ApplicationRepository;
import egovkeyclok.service.ApplicationService;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.egovframe.rte.fdl.cmmn.EgovAbstractServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("applicationService")
@Transactional
public class ApplicationServiceImpl
    extends EgovAbstractServiceImpl
    implements ApplicationService {

    private static final Logger LOGGER = LoggerFactory.getLogger(
        ApplicationServiceImpl.class
    );

    @Autowired
    ApplicationRepository applicationRepository;

    @Override
    public List<Application> getAllApplications() throws Exception {
        // Get all applications
        return StreamSupport
            .stream(applicationRepository.findAll().spliterator(), false)
            .collect(Collectors.toList());
    }

    @Override
    public Optional<Application> getApplicationById(String 민원번호)
        throws Exception {
        // Get a application by ID
        return applicationRepository.findById(민원번호);
    }

    @Override
    public Application createApplication(Application application)
        throws Exception {
        // Create a new application
        return applicationRepository.save(application);
    }

    @Override
    public Application updateApplication(Application application)
        throws Exception {
        // Update an existing application via ApplicationService
        if (applicationRepository.existsById(application.get민원번호())) {
            return applicationRepository.save(application);
        } else {
            throw processException("info.nodata.msg");
        }
    }

    @Override
    public void deleteApplication(String 민원번호) throws Exception {
        // Delete a application
        applicationRepository.deleteById(민원번호);
    }
}
