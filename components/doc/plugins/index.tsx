import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin"
import LexicalClickableLinkPlugin from "@lexical/react/LexicalClickableLinkPlugin"
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin"
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin"
import { ListPlugin } from "@lexical/react/LexicalListPlugin"
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin"
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin"

import { useConfigStore } from "@/app/settings/store"

import AutoLinkPlugin from "./AutoLinkPlugin"
import AutocompletePlugin from "./AutocompletePlugin"
import { CodeHighlightPlugin } from "./CodeHighlightPlugin"
import { ComponentPickerMenuPlugin } from "./ComponentPickerMenuPlugin"
import { DatabasePlugin } from "./DatabasePlugin"
import DragDropPaste from "./DragDropPaste"
import FloatingLinkEditorPlugin from "./FloatingLinkEditorPlugin"
import ImagesPlugin from "./ImagesPlugin"
import ListMaxIndentLevelPlugin from "./ListMaxIndentLevelPlugin"
import { SQLPlugin } from "./SQLPlugin"
import { ShortcutPlugin } from "./ShortcutPlugin"
import { TableOfContentsPlugin } from "./TableOfContentsPlugin"
import { allTransformers } from "./const"

export const AllPlugins = () => {
  const {
    experiment: { enableAICompletionInDoc },
  } = useConfigStore()
  return (
    <>
      <HorizontalRulePlugin />
      <TableOfContentsPlugin />
      <SQLPlugin />
      <CodeHighlightPlugin />
      <HistoryPlugin />
      <HashtagPlugin />
      <ListPlugin />
      {enableAICompletionInDoc && <AutocompletePlugin />}
      <DatabasePlugin />
      {/* TabIndentationPlugin let you type `Tab` to indent a list item, ListMaxIndentLevelPlugin let you control the max indent level */}
      <TabIndentationPlugin />
      {/* don't be a dick, don't nest lists too deep */}
      <ListMaxIndentLevelPlugin maxDepth={18} />
      <CheckListPlugin />
      <LinkPlugin />
      <ShortcutPlugin />
      <AutoLinkPlugin />
      <ImagesPlugin />
      <DragDropPaste />
      <LexicalClickableLinkPlugin />
      <ComponentPickerMenuPlugin />
      <MarkdownShortcutPlugin transformers={allTransformers} />
      <FloatingLinkEditorPlugin />
    </>
  )
}
