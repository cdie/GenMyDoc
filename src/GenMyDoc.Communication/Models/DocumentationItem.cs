using System;
using System.Collections.Generic;
using System.Text;

namespace GenMyDoc.Communication.Models
{
    public sealed class DocumentationItem
    {

        #region Properties

        public Guid Id { get; internal set; }
        public Guid? ParentId { get; internal set; }
        public string Name { get; internal set; }

        #endregion

    }
}
