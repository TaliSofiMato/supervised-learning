import logo from './logo.svg';

 function ImagesList(props) {
  return (
      <table>
          {props.data.map((image) => {
              return (
                  <tr> <td>{image.image} </td> </tr>
              )
          })}
      </table>
  );
}

export default ImagesList;
