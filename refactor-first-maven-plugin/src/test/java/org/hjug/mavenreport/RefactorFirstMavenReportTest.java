package org.hjug.mavenreport;

import static org.junit.Assert.*;

import java.util.Locale;
import org.junit.Test;

public class RefactorFirstMavenReportTest {

    private RefactorFirstMavenReport mavenReport = new RefactorFirstMavenReport();

    @Test
    public void testGetOutputName() {
        // This report will generate simple-report.html when invoked in a project with `mvn site`
        assertEquals("refactor-first-report", mavenReport.getOutputName());
    }

    @Test
    public void getName() {
        // Name of the report when listed in the project-reports.html page of a project
        assertEquals("Refactor First Report", mavenReport.getName(Locale.getDefault()));
    }

    @Test
    public void getDescription() {
        // Description of the report when listed in the project-reports.html page of a project
        assertEquals(
                "Ranks the disharmonies in a codebase.  The classes that should be refactored first "
                        + " have the highest priority values.",
                mavenReport.getDescription(Locale.getDefault()));
    }
}
