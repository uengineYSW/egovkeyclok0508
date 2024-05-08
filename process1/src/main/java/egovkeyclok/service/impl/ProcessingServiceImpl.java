package egovkeyclok.service.impl;

import egovkeyclok.domain.CreateProcessingCommand;
import egovkeyclok.domain.Processing;
import egovkeyclok.domain.ProcessingRepository;
import egovkeyclok.domain.UpdateProcessingCommand;
import egovkeyclok.service.ProcessingService;
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

@Service("processingService")
@Transactional
public class ProcessingServiceImpl
    extends EgovAbstractServiceImpl
    implements ProcessingService {

    private static final Logger LOGGER = LoggerFactory.getLogger(
        ProcessingServiceImpl.class
    );

    @Autowired
    ProcessingRepository processingRepository;

    @Override
    public List<Processing> getAllProcessings() throws Exception {
        // Get all processings
        return StreamSupport
            .stream(processingRepository.findAll().spliterator(), false)
            .collect(Collectors.toList());
    }

    @Override
    public Optional<Processing> getProcessingById(String name)
        throws Exception {
        // Get a processing by ID
        return processingRepository.findById(name);
    }

    @Override
    public Processing createProcessing(Processing processing) throws Exception {
        // Create a new processing
        return processingRepository.save(processing);
    }

    @Override
    public Processing updateProcessing(Processing processing) throws Exception {
        // Update an existing processing via ProcessingService
        if (processingRepository.existsById(processing.getName())) {
            return processingRepository.save(processing);
        } else {
            throw processException("info.nodata.msg");
        }
    }

    @Override
    public void deleteProcessing(String name) throws Exception {
        // Delete a processing
        processingRepository.deleteById(name);
    }

    @Override
    public Processing updateProcessing(
        UpdateProcessingCommand updateProcessingCommand
    ) throws Exception {
        // You can implement logic here, or call the domain method of the Processing.

        /** Option 1-1:  implement logic here     
            Processing processing = new Processing();
            processing.setUserId(event.getUserId());

            processingRepository.save(processing);   
        */

        Optional<Processing> optionalProcessing = processingRepository.findById(
            updateProcessingCommand.getProcessingId()
        );

        if (optionalProcessing.isPresent()) {
            Processing processing = optionalProcessing.get();

            // business Logic....
            processing.updateProcessing(updateProcessingCommand);
            processingRepository.save(processing);

            return processing;
        } else {
            throw processException("info.nodata.msg");
        }
    }
}
