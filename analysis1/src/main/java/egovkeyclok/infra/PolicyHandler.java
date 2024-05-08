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
    Analysis1Repository analysis1Repository;

    @StreamListener(KafkaProcessor.INPUT)
    public void whatever(@Payload String eventString) {}

    @StreamListener(
        value = KafkaProcessor.INPUT,
        condition = "headers['type']=='InvestigationApproved'"
    )
    public void wheneverInvestigationApproved_데이터수집(
        @Payload InvestigationApproved investigationApproved
    ) {
        InvestigationApproved event = investigationApproved;
        System.out.println(
            "\n\n##### listener 데이터수집 : " + investigationApproved + "\n\n"
        );

        Analysis1.데이터수집(event);
    }

    @StreamListener(
        value = KafkaProcessor.INPUT,
        condition = "headers['type']=='InvestigationDeleted'"
    )
    public void wheneverInvestigationDeleted_데이터수집(
        @Payload InvestigationDeleted investigationDeleted
    ) {
        InvestigationDeleted event = investigationDeleted;
        System.out.println(
            "\n\n##### listener 데이터수집 : " + investigationDeleted + "\n\n"
        );

        Analysis1.데이터수집(event);
    }
}
//>>> Clean Arch / Inbound Adaptor
