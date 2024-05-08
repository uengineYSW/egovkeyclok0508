package egovkeyclok.infra;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import egovkeyclok.config.kafka.KafkaProcessor;
import egovkeyclok.domain.*;
import javax.naming.NameParser;
import javax.naming.NameParser;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

//<<< Clean Arch / Inbound Adaptor
@Service
@Transactional
public class PolicyHandler {

    @Autowired
    InvestigationRepository investigationRepository;

    @Autowired
    ProcessingRepository processingRepository;

    @StreamListener(KafkaProcessor.INPUT)
    public void whatever(@Payload String eventString) {}

    @StreamListener(
        value = KafkaProcessor.INPUT,
        condition = "headers['type']=='Applied'"
    )
    public void wheneverApplied_CreateInvestigation(@Payload Applied applied) {
        Applied event = applied;
        System.out.println(
            "\n\n##### listener CreateInvestigation : " + applied + "\n\n"
        );

        CreateInvestigationCommand createInvestigationCommand = new CreateInvestigationCommand();
        // implement:  Map command properties from event

        // investigationRepository.findById(
        // implement: Set the Investigation Id from one of Applied event's corresponding property

        // ).ifPresent(investigation->{
        //  investigation.createInvestigation(createInvestigationCommand);
        // });

    }

    @StreamListener(
        value = KafkaProcessor.INPUT,
        condition = "headers['type']=='InvestigationApproved'"
    )
    public void wheneverInvestigationApproved_CreateProcess(
        @Payload InvestigationApproved investigationApproved
    ) {
        InvestigationApproved event = investigationApproved;
        System.out.println(
            "\n\n##### listener CreateProcess : " +
            investigationApproved +
            "\n\n"
        );

        CreateProcessingCommand createProcessingCommand = new CreateProcessingCommand();
        // implement:  Map command properties from event

        // processingRepository.findById(
        // implement: Set the Processing Id from one of InvestigationApproved event's corresponding property

        // ).ifPresent(processing->{
        //  processing.createProcessing(createProcessingCommand);
        // });

    }
}
//>>> Clean Arch / Inbound Adaptor
