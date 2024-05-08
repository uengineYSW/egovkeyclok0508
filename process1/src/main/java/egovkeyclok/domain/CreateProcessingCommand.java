package egovkeyclok.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class CreateProcessingCommand {

    private String name;
    private Date date;
}
