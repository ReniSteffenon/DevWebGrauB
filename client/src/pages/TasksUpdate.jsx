import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CheckboxWrapper = styled.div`
  margin: 15px 5px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  background: ${(props) => (props.checked ? "#0f0" : "#fff")};
  border-radius: 3px;
  border: 1px solid #000;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

class TasksUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      done: false,
    };
  }

  handleChangeInputName = async (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleUpdateTask = async () => {
    const { id, name, done } = this.state;
    const payload = { name, done };

    await api.updateTaskById(id, payload).then((res) => {
      window.alert(`Task updated successfully`);
      this.setState({
        name: "",
        done: false,
      });
    });
  };

  componentDidMount = async () => {
    const { id } = this.state;
    const task = await api.getTaskById(id);

    this.setState({
      name: task.data.data.name,
      done: task.data.data.done,
    });
  };

  render() {
    return (
      <>
        <Wrapper>
          <Title>Atualizar Tarefa</Title>

          <Label>Título: </Label>
          <InputText
            type="text"
            value={this.state.name}
            onChange={this.handleChangeInputName}
          />
          <CheckboxWrapper>
            <CheckboxContainer
              onClick={() => this.setState({ checked: !this.state.checked })}
            >
              <HiddenCheckbox checked={this.state.checked} />
              <StyledCheckbox checked={this.state.checked}>
                <Icon viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </Icon>
              </StyledCheckbox>
            </CheckboxContainer>
            <Label>Marcar como pronto</Label>
          </CheckboxWrapper>
          <Button onClick={this.handleUpdateTask}>Atualizar Tarefa</Button>
        </Wrapper>
      </>
    );
  }
}

export default TasksUpdate;
