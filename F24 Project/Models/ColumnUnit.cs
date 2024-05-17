using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace F24_Project.Models
{
    public class ColumnUnit
    {
        public String name;
        public enum datatype { 
            VARCHAR,
            BIGINT,
            BOOL
        };
        public bool isConnected;
        public int connection;

        public ColumnUnit(string name, bool isConnected, int connection)
        {
            this.name = name;
            this.isConnected = isConnected;
            this.connection = connection;
        }
    }
}
