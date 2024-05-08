package egovkeyclok.domain;

import egovkeyclok.domain.*;
import egovkeyclok.infra.AbstractEvent;
import java.util.*;
import lombok.*;

@Data
@ToString
public class Applied extends AbstractEvent {

    private String 민원번호;
    private String 민원내용;
}
