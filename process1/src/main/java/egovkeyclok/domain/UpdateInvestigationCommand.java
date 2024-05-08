package egovkeyclok.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class UpdateInvestigationCommand {

    private String result;
    private Boolean approve;
}
