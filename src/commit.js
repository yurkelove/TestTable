// export default combineReducers({
//     tableApp
// });


// export default function tableApp(state = [], action) {
//     switch (action.type) {
//       case DATA_TABLE:
//         return { ...state, dataTable: [...state.dataTable, action.payload] };
//       case NAME:
//         return { ...state, name: action.payload };
//       case VALUE: 
//         return { ...state, value: action.payload };
//       case DELETE_ROW_ELEM:
//         // return Object.assign({}, {dataTable: state.dataTable.filter(item => item.id !== action.id)})
//         // return { ...state, dataTable: [...state.dataTable.filter(item => item.id !== action.payload)]} 
//         return {...state, dataTable : deleteRow(state.dataTable, action.id)}
//       default:
//         return state;
//     }
// }


// function deleteRow(array,action){
//   // console.log(typeof(action))
//   let mutate = array.slice();
//   return mutate.filter(item => item.id !== action)

// }


 // dataRenderTable(data,index){
  //   return (
  //     <tr>
  //     <td className="name">
  //       <input type="text" name="name"  value={'name' + index} onChange={this.handlerName}/>
  //     </td>
  //     <td className="data">
  //       <input type="text" name="data" value={'value' + index} onChange={this.handlerValue}/>
  //     </td>
  //     <td className="edit" onClick={this.editRow}>
  //        {this.state.edit ? <FontAwesomeIcon icon={faEdit}/> : <FontAwesomeIcon icon={faPlus}/> }
  //     </td>
  //     <td className="trash" onClick={(e) => this.deleteRow(e,index)}>
  //     < FontAwesomeIcon icon={faTrash}/>
  //     </td>
  //   </tr>
  //   )
  // }


    // dataRender = () => {
  //   const { dataRenderValue } = this.state;
  //   const parsedData = JSON.parse(dataRenderValue);

  //   if (parsedData && parsedData.length) {
  //     parsedData.forEach(item => {
  //       if (item.hasOwnProperty("name") && item.hasOwnProperty("value")) {
  //          this.setState({
  //            data : [...this.state.data,...parsedData],
  //          })  
  //       }	
  //     });
  //   } else {
  //     console.log("JSon is not valid");
  //   }    
    
  // }

  // dataSave = () => {
  //   const { dataRenderValue, data } = this.state;

  //   if(data.length){
  //     this.setState({
  //       dataSaveValue: dataRenderValue
  //     })
  // }
  // }

    {/* <div className="table-container-textarea">

      <div className="table-data">
            <h2>TableData</h2>
            <textarea rows="15" cols="40" id="tableData" value={this.state.dataRenderValue} onChange={this.dataRenderHandler}></textarea>
              <button id="tableRender" onClick={this.dataRender}>Render Table</button>
          </div>

          <div className="table-data-save">
              <h2>TableDownload</h2>
              <textarea rows="15" cols="40" id="tableDataSave" value={this.state.dataSaveValue} onChange={this.dataSaveHandler}></textarea>
                <button id="tableSave" onClick={this.dataSave}>Save data</button>
          </div>
      </div> */}