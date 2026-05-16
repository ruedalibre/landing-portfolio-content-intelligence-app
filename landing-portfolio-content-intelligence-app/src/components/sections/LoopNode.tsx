import { Handle, Position } from '@xyflow/react';

type LoopNodeData = {
  phase: string;
  title: string;
  line1: string;
  line2: string;
  accent: 'terracota' | 'slate';
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
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
    </div>
  );
};

export default LoopNode;
