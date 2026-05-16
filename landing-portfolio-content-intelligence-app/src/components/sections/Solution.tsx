import { useState, useEffect, useCallback } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Background,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useTranslation } from 'react-i18next';
import LoopNode from './LoopNode';

const nodeTypes = {
  loopNode: LoopNode,
};

const desktopPositions: Record<string, { x: number; y: number }> = {
  '1': { x: 0, y: 0 },
  '2': { x: 420, y: 0 },
  '3': { x: 420, y: 280 },
  '4': { x: 0, y: 280 },
};

const mobilePositions: Record<string, { x: number; y: number }> = {
  '1': { x: 0, y: 0 },
  '2': { x: 0, y: 220 },
  '3': { x: 0, y: 440 },
  '4': { x: 0, y: 660 },
};

const EDGES = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#c47859', strokeWidth: 1.5, strokeDasharray: '6 4' },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#c47859', strokeWidth: 1.5, strokeDasharray: '6 4' },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#364965', strokeWidth: 1.5, strokeDasharray: '6 4' },
  },
  {
    id: 'e4-1',
    source: '4',
    target: '1',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#364965', strokeWidth: 1.5, strokeDasharray: '6 4' },
  },
];

// Inner component — holds React Flow state and must live inside ReactFlowProvider
const SolutionDiagram = () => {
  const { t } = useTranslation('solution');
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  const buildNodes = useCallback(
    (mobile: boolean) => [
      {
        id: '1',
        type: 'loopNode',
        position: mobile ? mobilePositions['1'] : desktopPositions['1'],
        data: {
          phase: t('steps.capture.phase'),
          title: t('steps.capture.title'),
          line1: t('steps.capture.line1'),
          line2: t('steps.capture.line2'),
          accent: 'terracota',
        },
      },
      {
        id: '2',
        type: 'loopNode',
        position: mobile ? mobilePositions['2'] : desktopPositions['2'],
        data: {
          phase: t('steps.convert.phase'),
          title: t('steps.convert.title'),
          line1: t('steps.convert.line1'),
          line2: t('steps.convert.line2'),
          accent: 'terracota',
        },
      },
      {
        id: '3',
        type: 'loopNode',
        position: mobile ? mobilePositions['3'] : desktopPositions['3'],
        data: {
          phase: t('steps.insights.phase'),
          title: t('steps.insights.title'),
          line1: t('steps.insights.line1'),
          line2: t('steps.insights.line2'),
          accent: 'slate',
        },
      },
      {
        id: '4',
        type: 'loopNode',
        position: mobile ? mobilePositions['4'] : desktopPositions['4'],
        data: {
          phase: t('steps.grow.phase'),
          title: t('steps.grow.title'),
          line1: t('steps.grow.line1'),
          line2: t('steps.grow.line2'),
          accent: 'slate',
        },
      },
    ],
    [t]
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(buildNodes(false));
  const [edges, , onEdgesChange] = useEdgesState(EDGES);

  // Sync nodes when breakpoint or language changes
  useEffect(() => {
    setNodes(buildNodes(isMobile));
  }, [isMobile, buildNodes, setNodes]);

  // Listen for viewport resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      fitView
      fitViewOptions={{ padding: 0.2 }}
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={false}
      panOnDrag={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
      zoomOnDoubleClick={false}
      proOptions={{ hideAttribution: true }}
    >
      <Background
        variant={BackgroundVariant.Dots}
        gap={24}
        size={1}
        color="var(--border-subtle)"
      />
    </ReactFlow>
  );
};

const Solution = () => {
  const { t } = useTranslation('solution');

  return (
    <section id="how-it-works" className="solution reveal">
      <div className="container solution__content">

        <div className="solution__header">
          <span className="section-label">{t('label')}</span>
          <h2 className="solution__title">
            {t('title')} <span className="highlight">{t('highlight')}</span>
          </h2>
          <p className="solution__subtitle">{t('subtitle')}</p>
        </div>

        <div className="solution__diagram">
          <ReactFlowProvider>
            <SolutionDiagram />
          </ReactFlowProvider>
        </div>

      </div>
    </section>
  );
};

export default Solution;
