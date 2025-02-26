/* export const Tabel = ({ destination }: any) => {
  console.log(destination);
  return (
    <div>
      <table>
        <caption>Omgång 1</caption>
        <tbody>
          <tr>
            <th>Datum</th>
            <th>Match</th>
          </tr>
          <tr>
            <td>7 januari</td>
            <td>MFF-DJURGÅRDEN</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
 */

export const Tabel = ({ destination }: any) => {
  console.log(destination);

  return (
    <div className="flex flex-col gap-5">
      <div className="mx-auto w-[70%] justify-between">
        <h2 className=" text-[30px] font-normal normal-case ">
          {destination.title}
        </h2>
      </div>
      {destination.table_columns.map((column: any) => (
        <div
          key={column._uid}
          className="grid grid-cols-2 w-[70%] mx-auto gap-4"
        >
          {column.field.map((fieldItem: any) => (
            <table key={fieldItem._uid}>
              {fieldItem.caption &&
                fieldItem.caption.map((captionItem: any) => (
                  <caption key={captionItem._uid}>{captionItem.title}</caption>
                ))}

              <tbody>
                <tr>
                  {fieldItem.header &&
                    fieldItem.header.map((headerItem: any) => (
                      <th key={headerItem._uid} className="px-10">
                        {headerItem.title}
                      </th>
                    ))}
                </tr>
                <tr>
                  {fieldItem.body &&
                    fieldItem.body.map((bodyItem: any) => (
                      <td key={bodyItem._uid} className="px-10">
                        {bodyItem.title}
                      </td>
                    ))}
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      ))}
    </div>
  );
};
