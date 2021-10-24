import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class log
{
    static Logger logger = Logger.getLogger(log.class);
    public static void main(String[] args)
    {
        //PropertiesConfigurator is used to configure logger from properties file
        PropertyConfigurator.configure("src\\log4j.properties");

        //Log in console in and log file
        logger.info("Log4j appender configuration is successful !!");
    }
}

