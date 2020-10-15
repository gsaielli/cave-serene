using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Oracle.ManagedDataAccess.Client;

namespace CaveSerene
{
    public partial class wf : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //var d = Server.MapPath("/App_Data/Wallet");
            //Response.Write(d);
            //Response.Write("<br/>" + Directory.Exists(d));

            //var f = Directory.GetFiles(d);
            //foreach (var i in f)
            //    Response.Write("<br />" + i);

            Response.Write(Server.MapPath("/") + "<br/>");

            OracleConfiguration.OracleDataSources.Add("orclpdb", @"(description=(retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.eu-zurich-1.oraclecloud.com))(connect_data=(service_name=cfdnkbdx0aohvkj_dbtest1_high.adb.oraclecloud.com))(security=(ssl_server_cert_dn=""CN=adb.eu-zurich-1.oraclecloud.com,OU=Oracle ADB ZURICH,O=Oracle Corporation,L=Redwood City,ST=California,C=US"")))");
            OracleConfiguration.WalletLocation = ".";

            using (OracleConnection con = new OracleConnection("user id=ADMIN; password=Y,#S3F>?PC7x; data source=orclpdb"))
            {
                using (OracleCommand cmd = con.CreateCommand())
                {
                    try
                    {
                        con.Open();
                        cmd.CommandText = "SELECT * FROM v$version";

                        //Execute the command and use DataReader to retrieve the data.
                        OracleDataReader reader = cmd.ExecuteReader();
                        reader.Read();

                        //Output database version connection info to page.
                        Response.Write("Connected to " + reader.GetString(0) + "<br/>");
                    }
                    catch (Exception ex)
                    {
                        //If application fails, output error message to page.
                        Response.Write(ex.Message);
                    }
                }
            }

        }
    }
}