import { Handle, Position } from "@xyflow/react";

type LoopNodeData = {
  phase: string;
  title: string;
  line1: string;
  line2: string;
  accent: "terracota" | "slate";
};

const LoopNode = ({ data }: { data: LoopNodeData }) => {
  return (
    <div className={`loop-node loop-node--${data.accent}`}>
      <div className="loop-node__bar" />
      <div className="loop-node__content">
        <span className="loop-node__phase">{data.phase}</span>
        <h4 className="loop-node__title">{data.title}</h4>
        <p className="loop-node__body">{data.line1}</p>
        <p className="loop-node__body">{data.line2}</p>
      </div>

      {/* Source handles — all 4 sides so step edges can exit in any direction */}
      <Handle type="source" position={Position.Right}  id="src-right"  style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Bottom} id="src-bottom" style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Left}   id="src-left"   style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Top}    id="src-top"    style={{ opacity: 0 }} />

      {/* Target handles — all 4 sides so step edges can enter from any direction */}
      <Handle type="target" position={Position.Left}   id="tgt-left"   style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Top}    id="tgt-top"    style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Right}  id="tgt-right"  style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Bottom} id="tgt-bottom" style={{ opacity: 0 }} />
    </div>
  );
};

export default LoopNode;
