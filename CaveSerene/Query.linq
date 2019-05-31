<Query Kind="Program">
  <Namespace>Serenity.Data</Namespace>
</Query>

void Main()
{
    var query = new Serenity.Data.SqlQuery();
    query.Select("Firstname");
    query.Select("Surname");
    query.From("People");
    query.OrderBy("Age");
    
    Console.WriteLine(query.ToString());
}