package egovkeyclok.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class ApplyCommand {

    private String 민원번호;
    private String 민원내용;
}
