import React from 'react';
import nanoid from 'nanoid';
import  {bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  * as action from './action/action';
import tableApp from './reducer/tableApp';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    edit : false,
    value: '',
    name: '',
    tableRender: false,
    dataRenderValue: '',
    dataSaveValue: ''
    };

    // this.deleteRow = this.deleteRow.bind(this);
  }

  addRow = () => {
    let data = {
      id: nanoid(),
      name: '',
      value: '',
    }
    this.props.DATA_TABLE_ARRAY(data);
  }

  editRow = () => {
    this.setState({
      edit: !this.state.edit,
    })
  }

  dataRenderHandler = (event) => {
    const { value } = event.target;

    this.setState({
      dataRenderValue: value,
    });
  }

  dataSaveHandler = (event) => {
    const { value } = event.target;

    this.setState({
      dataSaveValue: value,
    });
  }


  dataRenderTable = () => (
    this.props.dataTable.map((item,index) => (
      <tr>
      <td className="name">
        <input type="text" name="name" value={'name' + '' + index} onChange={this.handlerName}/>
      </td>
      <td className="data">
        <input type="text" name="data" value={'value' + '' + index} onChange={this.handlerValue}/>
      </td>
      <td className="edit" onClick={this.editRow}>
         {this.state.edit ? <FontAwesomeIcon icon={faEdit}/> : <FontAwesomeIcon icon={faPlus}/> }
      </td>
      <td className="trash" onClick={(e) => this.deleteRow(e,index)}>
      < FontAwesomeIcon icon={faTrash}/>
      </td>
    </tr>
    ))
  )


  deleteRow = (e,id) => {
    e.preventDefault();
    this.props.DELETE_ROW(id)
  }


  render() {
    return (
    <div className="content">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody id="table-body">
            {this.dataRenderTable()}
          <tr className="add-row">
            <td colspan="4" className="new-row" onClick={this.addRow}><FontAwesomeIcon icon={faPlus}/> Add Row</td>
          </tr>
        </tbody>
      </table>
    </div>  
    )
  }
}

function mapStateToProps(state) {
  return {
    dataTable: state.tableApp,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...action,
  }, dispatch);
}



export default connect(mapStateToProps,mapDispatchToProps)(App);

