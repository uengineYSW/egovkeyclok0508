package egovkeyclok.infra;

import egovkeyclok.domain.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

@Component
public class Analysis1HateoasProcessor
    implements RepresentationModelProcessor<EntityModel<Analysis1>> {

    @Override
    public EntityModel<Analysis1> process(EntityModel<Analysis1> model) {
        return model;
    }
}
