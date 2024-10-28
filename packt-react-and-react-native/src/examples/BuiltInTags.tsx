const BuiltInTags = () => {
  return (
    <div>
      <button type="button">My Button</button>
      <code>Console.WriteLine();</code>
      <input type="text" />
      <label htmlFor="label">My Label</label>
      <p>My Paragraph</p>
      <pre>My Pre</pre>
      <select defaultValue={"myOption"}>
        <option>My Option</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>My Column</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>My Row</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li>My List Item</li>
      </ul>
    </div>
  );
};

export default BuiltInTags;
