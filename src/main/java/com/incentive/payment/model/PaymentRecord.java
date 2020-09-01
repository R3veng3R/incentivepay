package com.incentive.payment.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String lastName;
    private String middleName;
    private Date created;
    private String link;

    private String gia9x5;
    private String gia9x4;
    private String gia9x3;

    private String gia11x100;
    private String gia11x82;
    private String gia11x72;
    private String gia11x62;
    private String gia11x52;

    private String gia11mathx100;
    private String gia11mathx79;
    private String gia11mathx64;
    private String gia11mathx35;
    private String gia11mathx30;

    private String independentDiagnostics5;
    private String independentDiagnostics4;
    private String independentDiagnostics3;

    private String voshMunicipalityWinner;
    private String voshMunicipalityPrize;

    private String voshRegionWinner;
    private String voshRegionPrize;

    private String voshWinner;
    private String voshPrize;

    private String moshWinner;
    private String moshPrize;

    private String museumsParksEstatesWinner;
    private String museumsParksEstatesPrize;

    private String oLimpsUniversMskWinner;
    private String oLimpsUniversMskPrize;

    private String mskStudyOlimpWinner;
    private String mskStudyOlimpPrize;

    private String olimpMunicipalityMetodCentrWinner;
    private String olimpMunicipalityMetodCentrPrize;
    private String olimpRegionMetodCentrWinner;
    private String olimpRegionMetodCentrPrize;

    private String metaInYazMunicipalityWinner;
    private String metaInYazMunicipalityPrize;

    private String metaInYazRegionWinner;
    private String metaInYazRegionPrize;

    private String sportMunicipalityWinner;
    private String sportMunicipalityPrize;

    private String sportRegionWinner;
    private String sportRegionPrize;

    private String sportVSEROSWinner;
    private String sportVSEROSPrize;

    private String sportGTOGold;
    private String sportGTOSilver;
    private String sportGTOBronze;

    private String abilimpiksOtborWinner;
    private String abilimpiksOtborPrize;

    private String abilimpiksGorodWinner;
    private String abilimpiksGorodPrize;
    private String abilimpiksGorodInstock;

    private String abilimpiksVSEROSWinner;
    private String abilimpiksVSEROSPrize;
    private String abilimpiksVSEROSInstock;

    private String wordskillsVSEROSWinner;
    private String wordskillsVSEROSPrize;
    private String wordskillsVSEROSInstock;

    private String wordskillsRegionWinner;
    private String wordskillsRegionPrize;
    private String wordskillsRegionInstock;

    private String gramotaoperatorasemifinal;

    private String kadetStarWinner;
    private String kadetStarPrize;

    private String artikInStart;
    private String artikInEnd;

    private String projectSinceMunicipalityWinner;
    private String projectSinceMunicipalityPrize;
    private String projectSinceMunicipalityInstock;

    private String projectSinceRegionWinner;
    private String projectSinceRegionPrize;
    private String projectSinceRegionInstock;

    private String contestMunicipalityWinner;
    private String contestMunicipalityPrize;

    private String contestRegionWinner;
    private String contestRegionPrize;

    private String KVNSemifinalWinner;
    private String KVNSemifinalPrize;

    private String kvnfinalWinner;
    private String kvnfinalPrize;

    private String teacherHightlevel;
    private String teacherExpertlevel;

    private String notteacherHightlevel;
    private String notteacherExpertlevel;

    private String fivexfive;
    private String daysbefore;
}
