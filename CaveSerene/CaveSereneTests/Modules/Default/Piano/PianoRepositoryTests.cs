using Microsoft.VisualStudio.TestTools.UnitTesting;
using CaveSerene.Default.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Serenity;
using Serenity.Data;
using Serenity.Data.Schema;
using CaveSerene.Default.Entities;


namespace CaveSerene.Default.Repositories.Tests
{
    [TestClass()]
    public class PianoRepositoryTests
    {
        [TestMethod()]
        public void RetrieveTest()
        {
            var str = System.Configuration.ConfigurationManager.ConnectionStrings["Default"].ConnectionString;
            //using (var connection = SqlConnections.NewFor<PianoRow>())
            using (var connection = SqlConnections.New(str, "System.Data.SqlClient"))
            {
                var a = connection.List<PianoRow>();
                foreach (var pianoRow in a)
                {
                    System.Diagnostics.Debug.Write(pianoRow.Descrizione);
                }
            }
        }
    }
}