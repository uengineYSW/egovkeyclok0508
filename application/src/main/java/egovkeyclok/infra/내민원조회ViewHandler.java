package egovkeyclok.infra;

import egovkeyclok.config.kafka.KafkaProcessor;
import egovkeyclok.domain.*;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

@Service
public class 내민원조회ViewHandler {

    //<<< DDD / CQRS
    @Autowired
    private 내민원조회Repository 내민원조회Repository;
    //>>> DDD / CQRS
}
