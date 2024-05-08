package egovkeyclok.infra;

import egovkeyclok.domain.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

@Component
public class ApplicationHateoasProcessor
    implements RepresentationModelProcessor<EntityModel<Application>> {

    @Override
    public EntityModel<Application> process(EntityModel<Application> model) {
        return model;
    }
}
