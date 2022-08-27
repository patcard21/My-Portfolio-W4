import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
ReactDOM.createRoot(document.querySelector("#app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
const { Component } = React;

// example project data
const projects = [
  {
    title: "Example 0",
    description:
      "This is an example project item. You can sort through these using the tags. You can also click a tag to add it to the filter.",
    tags: ["react", "javascript", "game", "back-end"],
  },
  {
    title: "Game of Life",
    description: "React implementation of the game of life.",
    tags: ["react", "javascript", "game", "web", "front-end"],
  },
  {
    title: "Calculator",
    description: "Calculator written in Javascript",
    tags: ["javascript", "utility", "web"],
  },
  {
    title: "Tic Tac Toe",
    description: "A command-line Tic Tac Toe game written in Ruby",
    tags: ["ruby", "game", "cli"],
  },
  {
    title: "TodoList",
    description: "Full stack todo-list written in fullstack Javascript",
    tags: [
      "react",
      "javascript",
      "node",
      "fullstack",
      "front-end",
      "back-end",
      "web",
      "mvc",
    ],
  },
  {
    title: "Weather",
    description: "A Weather App with React Native ",
    tags: [
      "react",
      "javascript",
      "react-native",
      "front-end",
      "mobile",
      "android",
      "ios",
    ],
  },
  {
    title: "Markdown Editor",
    description: "Markdown Editor powered by Monaco and React",
    tags: ["react", "javascript", "monaco", "front-end"],
  },
  {
    title: "Bloggie",
    description: "Rails-powered blog with a React front-end",
    tags: [
      "react",
      "javascript",
      "ruby",
      "front-end",
      "back-end",
      "fullstack",
      "ruby-on-rails",
      "mvc",
    ],
  },
];

class Helpers {
  static contains(orig, filter) {
    let res = filter.map((item) => {
      return orig.includes(item);
    });
    return !res.includes(false);
  }

  static hasDuplicates(array) {
    return new Set(array).size !== array.length;
  }
}

// components
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: ["game"],
    };

    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleListTagClick = this.handleListTagClick.bind(this);
  }

  handleTagChange(tags) {
    this.setState({ tags });
  }

  handleListTagClick(tag) {
    this.setState({ tags: [...this.state.tags, tag] });
  }

  render() {
    return (
      <div>
        <TagInput onTagChange={this.handleTagChange} tags={this.state.tags} />
        <ExampleList
          items={projects}
          filter={this.state.tags}
          onTagClick={this.handleListTagClick}
        />
      </div>
    );
  }
}

class TagInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      tags: this.props.tags || [],
    };

    this.handleNewTag = this.handleNewTag.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleTagDelete = this.handleTagDelete.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
    this.notDuplicate = this.notDuplicate.bind(this);
    this.updateControlledTags = this.updateControlledTags.bind(this);
  }

  handleNewTag(tags) {
    if (this.props.onNewTag) this.props.onNewTag(tags);
    if (this.props.onTagChange) this.props.onTagChange(tags);
  }

  handleInputChange({ target: { value: inputValue } }) {
    inputValue = inputValue == "," ? "" : inputValue;
    this.setState({ inputValue });
  }

  handleKeyDown(e) {
    let {
      key,
      target: { value },
    } = e;
    let { tags } = this.state;
    switch (key) {
      case "Tab":
        if (value) e.preventDefault();
      case "Enter":
      case ",":
        value = value.trim();
        if (value && this.notDuplicate(tags, value)) {
          this.addTag(value);
        } else {
          this.setState({ inputValue: "" });
        }
        break;
      case "Backspace":
        if (!value) {
          this.handleTagDelete(tags.length - 1);
        }
        break;
    }
  }

  handleTagDelete(index, e) {
    this.deleteTag(index, () => {
      this.props.onTagChange(this.state.tags);
    });
  }

  deleteTag(index, callback) {
    let tags = this.state.tags.slice();

    tags.splice(index, 1);
    this.setState({ tags }, () => {
      if (callback) callback();
    });
  }

  notDuplicate(tags, newTag) {
    return !tags.includes(newTag) || this.props.allowDuplicates;
  }

  addTag(tag) {
    if (this.notDuplicate(this.state.tags, tag)) {
      this.setState({ tags: [...this.state.tags, tag], inputValue: "" }, () => {
        this.handleNewTag(this.state.tags);
      });
    }
  }

  updateControlledTags(tags) {
    if (tags && !Helpers.hasDuplicates(tags)) {
      this.setState({ tags }, () => {
        // this.props.onTagChange(tags);
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.updateControlledTags(nextProps.tags);
  }

  render() {
    return (
      <span className="tagInputWrapper">
        <TagsList
          tags={this.state.tags}
          onTagDelete={this.handleTagDelete}
          hashtag={this.props.hashtag}
        />
        <input
          name="tagInput"
          className="tagInput"
          placeholder="enter a tag..."
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
        />
      </span>
    );
  }
}

const TagsList = ({ tags, onTagDelete, hashtag }) => {
  let list = tags.map((tag, index) => (
    <Tag name={tag} onDelete={onTagDelete} index={index} hashtag={hashtag} />
  ));
  return (
    <ul name="tagsList" className="tagsList">
      {list}
    </ul>
  );
};

const Tag = ({ name, index, onDelete, hashtag, hashtagStyle }) => {
  return (
    <li>
      {hashtag && (
        <span
          style={{ color: "#898989", fontWeight: "bold", ...hashtagStyled }}
        >
          #{" "}
        </span>
      )}
      {name}
      <a href="#" onClick={(e) => onDelete(index, e)}>
        x
      </a>
    </li>
  );
};

const ExampleList = ({ items, filter, onTagClick }) => {
  let filtered = items.filter((item) => Helpers.contains(item.tags, filter));

  let renderedItems = filtered.map(({ title, description, tags }, index) => {
    return (
      <ExampleListItem
        title={title}
        description={description}
        tags={tags}
        key={index}
        onClick={onTagClick}
      />
    );
  });

  return (
    <div>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          padding: "0px",
          gridGap: "10px",
        }}
      >
        {renderedItems}
      </ul>
    </div>
  );
};

const ExampleListItem = ({ title, description, tags, key, onClick }) => {
  const renderedTags = tags.map((tag, index) => (
    <li onClick={(e) => onClick(tag, e)} className="tag clickable">
      {tag}
    </li>
  ));

  return (
    <li
      style={{
        padding: 10,
        listStyle: "none",
        background: "#efefef",
        borderRadius: "10px",
        boxShadow: "1px 1px 5px #aaa",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className="tagsList" style={{ padding: 0 }}>
        {renderedTags}
      </ul>
    </li>
  );
};
*/
