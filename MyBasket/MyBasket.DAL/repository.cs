using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyBasket.DAL.Entities;
using NHibernate;
using NHibernate.Cfg;

namespace MyBasket.DAL
{
    public class repository
    {
        #region C'Tors

        public repository(Configuration p_config)
        {
            this.Factory = p_config.BuildSessionFactory();
        }

        #endregion

        #region Properties

        private ISessionFactory Factory { get; set; }

        #endregion

        #region Methods

        public void AddProduct(Product p_product)
        {
            using (ISession session = this.Factory.OpenSession())
            {
                using (ITransaction transaction = session.BeginTransaction())
                {
                    session.SaveOrUpdate(p_product);
                    transaction.Commit();
                }
            }
        }

        public Product GetProductByProductId(int p_productId)
        {
            Product product = null;
            using (ISession session = this.Factory.OpenSession())
            {
                using (ITransaction transaction = session.BeginTransaction())
                {
                    product = session.Get<Product>(p_productId);
                }
            }

            return product;
        }

        #endregion
    }
}
