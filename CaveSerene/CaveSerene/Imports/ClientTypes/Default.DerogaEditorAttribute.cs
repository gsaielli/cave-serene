
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CaveSerene.Default
{
    public partial class DerogaEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CaveSerene.Default.DerogaEditor";

        public DerogaEditorAttribute()
            : base(Key)
        {
        }
    }
}

