/* eslint-disable no-unused-vars */
/* eslint-disable react/no-string-refs */
import { COLORS } from 'constants/colors';
import {
  CompositeDecorator,
  Editor,
  EditorState,
  getDefaultKeyBinding,
  Modifier,
  RichUtils
} from 'draft-js';
import 'draft-js/dist/Draft.css';
import {
  DPIconBold,
  DPIconCenter,
  DPIconItalic,
  DPIconLeft,
  DPIconLink,
  DPIconRight,
  DPIconUnderline
} from 'icons';
import React from 'react';
import styled from 'styled-components';
import '../organisms/css/editor.css';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({ editorState });

    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
  }

  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(e, this.state.editorState, 4 /* maxDepth */);
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
  }

  render() {
    // start

    // const linkDecorator = () =>
    //   new CompositeDecorator([
    //     {
    //       strategy: findLinkEntities,
    //       component: Link
    //     }
    //   ]);

    // function findLinkEntities(contentBlock, callback, contentState) {
    //   contentBlock.findEntityRanges((character) => {
    //     const entityKey = character.getEntity();
    //     return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
    //   }, callback);
    // }

    // const Link = (props) => {
    //   const { url, linkText } = props.contentState.getEntity(props.entityKey).getData();

    //   return (
    //     <a style={{ color: '#00cb7', textDecoration: 'underline' }} href={url}>
    //       {linkText || props.children}
    //     </a>
    //   );
    // };

    // const generateLink = (hyperLink, linkDisplayText) => {
    //   const decorator = linkDecorator();
    //   let link = hyperLink;

    //   if (!hyperLink.includes('http://')) {
    //     if (!hyperLink.includes('https//')) {
    //       link = `http://${hyperLink}`;
    //     }
    //   }

    //   const currentContent = editorState.getCurrentContent();

    //   currentContent.createEntity('LINK', 'MUTABLE', {
    //     url: link,
    //     target: '_blank'
    //   });

    //   const entityKey = currentContent.getLastCreatedEntityKey();

    //   const selection = editorState.getSelection();

    //   const textWithEntity = Modifier.replaceText(
    //     currentContent,
    //     selection,
    //     linkDisplayText,
    //     editorState.getCurrentInlineStyle(),
    //     entityKey
    //   );
    //   const newState = EditorState.createWithContent(textWithEntity, decorator);
    //   EditorState(newState);
    // };

    //end

    const { editorState } = this.state;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div className="RichEditor-root">
        <Header>
          <InlineStyleControls editorState={editorState} onToggle={this.toggleInlineStyle} />
          <BlockStyleControls editorState={editorState} onToggle={this.toggleBlockType} />
        </Header>

        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={this.mapKeyToEditorCommand}
            onChange={this.onChange}
            placeholder="Message"
            ref="editor"
            spellCheck={true}
          />
        </div>
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'right':
      return 'alignRight';
    case 'left':
      return 'alignLeft';
    case 'center':
      return 'alignCenter';
    default:
      return null;
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  { label: <DPIconLeft />, style: 'left' },
  { label: <DPIconRight />, style: 'right' },
  { label: <DPIconCenter />, style: 'center' },
  { label: <DPIconLink />, style: 'link' }
];

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

var INLINE_STYLES = [
  { label: <DPIconBold />, style: 'BOLD' },
  { label: <DPIconItalic />, style: 'ITALIC' },
  { label: <DPIconUnderline />, style: 'UNDERLINE' }
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export default TextEditor;

const Header = styled.div`
  background-color: ${COLORS['gray-500']};
  height: 6.4rem;
  display: flex;
  align-items: center;
  padding-left: 2.961rem;
`;
