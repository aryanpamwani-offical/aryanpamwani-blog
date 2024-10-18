'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar';
import Underline from '@tiptap/extension-underline';


const Tiptap = ({ onChange, content }) => {
    const handleChange = (newContent) => {
      onChange(newContent);
    };
    const editor = useEditor({
      extensions: [StarterKit, Underline],
      editorProps: {
        attributes: {
          class:
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        },
      },
      onUpdate: ({ editor }) => {
        handleChange(editor.getHTML());
      },
    });
    return (
        <div className="w-full px-4">
          <Toolbar editor={editor} content={content}/>
          <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
        </div>
      );
    };
export default Tiptap
