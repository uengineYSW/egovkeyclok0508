package egovkeyclok.domain;

import egovkeyclok.domain.*;
import egovkeyclok.infra.AbstractEvent;
import java.util.*;
import lombok.*;

@Data
@ToString
public class InvestigationDeleted extends AbstractEvent {

    private String name;
}
