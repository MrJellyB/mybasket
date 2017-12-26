using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyBasket.DAL.Entities;
using NHibernate;

namespace MyBasket.DAL
{
    public class checknHibernate
    {
        static void Main(string[] args)
        {
            string nId = "1";
            ISession session = NHibernateHelper.GetCurrentSession();
            IQuery query = session.CreateQuery("FROM FinalProject.dbo.BS_PRODUCT_TB WHERE Id = 1");
            query.SetString("name", nId);
            IList<Product> acc = query.List<Product>();
            session.Close();
            if (acc.Count == 0)
                Console.WriteLine("Cannot find specified user");
            else
                Console.WriteLine("Found " + acc[0].Id);

            Console.ReadKey();
        }
    }
}
