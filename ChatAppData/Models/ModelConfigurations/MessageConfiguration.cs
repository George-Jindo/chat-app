using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace ChatAppData.Models.ModelConfigurations
{
    public class MessageConfiguration : IEntityTypeConfiguration<Messages>
    {
        public void Configure(EntityTypeBuilder<Messages> builder)
        {
            builder.HasKey(prop => prop.Id);

            builder.Property(prop => prop.CreatedOn)
                .HasColumnType("TIMESTAMP(0)")
                .IsRequired();

            builder.Property(prop => prop.Text)
                .HasMaxLength(1000)
                .IsRequired();
        }
    }
}
