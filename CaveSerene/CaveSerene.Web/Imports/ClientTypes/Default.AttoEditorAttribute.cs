﻿
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CaveSerene.Default
{
    public partial class AttoEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CaveSerene.Default.AttoEditor";

        public AttoEditorAttribute()
            : base(Key)
        {
        }
    }
}

