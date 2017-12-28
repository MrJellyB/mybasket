using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyBasket.DAL.Entities;
using NHibernate.Cfg;

namespace MyBasket.DAL
{
    public class bl
    {
        #region Consts

        private const string MAPPING_FILE_PATH = @"C:\Users\lior\Desktop\המכללה למנהל\שנה ג\פרוייקט גמר\finalproject\mybasket\MyBasket\MyBasket.DAL\hibernate.cfg.xml";

        #endregion

        #region C'Tors

        public bl()
        {
            Configuration config = new Configuration().Configure(MAPPING_FILE_PATH);
            this.repository = new repository(config);
        }

        #endregion

        #region Properties

        public repository repository;

        #endregion

        #region Methods

        public void AddProduct(Product p_product)
        {
            this.repository.AddProduct(p_product);
        }

        public Product GetProductByProductId(int p_productId)
        {
            return this.repository.GetProductByProductId(p_productId);
        }

        #endregion
    }
}
