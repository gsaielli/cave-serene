
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CaveSerene.Default
{
    public partial class ProdottoEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CaveSerene.Default.ProdottoEditor";

        public ProdottoEditorAttribute()
            : base(Key)
        {
        }
    }
}

