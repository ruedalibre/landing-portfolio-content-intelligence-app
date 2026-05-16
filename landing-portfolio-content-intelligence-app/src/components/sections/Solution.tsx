import { useState, useEffect, useMemo } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Position,
  Background,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useTranslation } from "react-i18next";
import LoopNode from "./LoopNode";

const nodeTypes = { loopNode: LoopNode };

const TERRACOTA = "#c47859";
const SLATE = "#364965";

const edgeStyle = (color: string) => ({
  stroke: color,
  strokeWidth: 1.5,
  strokeDasharray: "6 4",
});

// Static positions — outside component to avoid recreating on every render
const DESKTOP_POS = {
  "1": { x: 0,   y: 0   },
  "2": { x: 440, y: 0   },
  "3": { x: 440, y: 280 },
  "4": { x: 0,   y: 280 },
};

const MOBILE_POS = {
  "1": { x: 0, y: 0   },
  "2": { x: 0, y: 180 },
  "3": { x: 0, y: 360 },
  "4": { x: 0, y: 540 },
};

// Edges — static, no need to recompute
const EDGES = [
  {
    id: "e1-2",
    source: "1", sourceHandle: "src-right",
    target: "2", targetHandle: "tgt-left",
    type: "step",
    animated: true,
    style: edgeStyle(TERRACOTA),
  },
  {
    id: "e2-3",
    source: "2", sourceHandle: "src-bottom",
    target: "3", targetHandle: "tgt-right",
    type: "step",
    animated: true,
    style: edgeStyle(TERRACOTA),
  },
  {
    id: "e3-4",
    source: "3", sourceHandle: "src-left",
    target: "4", targetHandle: "tgt-right",
    type: "step",
    animated: true,
    style: edgeStyle(SLATE),
  },
  {
    id: "e4-1",
    source: "4", sourceHandle: "src-top",
    target: "1", targetHandle: "tgt-top",
    type: "step",
    animated: true,
    style: edgeStyle(SLATE),
  },
];

// ── Inner diagram component — lives inside ReactFlowProvider ──────────────────

const SolutionDiagram = () => {
  const { t } = useTranslation("solution");
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  // Reactive breakpoint detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Recompute node positions and labels when breakpoint or language changes
  const computedNodes = useMemo(() => {
    const p = isMobile ? MOBILE_POS : DESKTOP_POS;

    return [
      {
        id: "1",
        type: "loopNode",
        position: p["1"],
        // Captura (top-left): exits right → node 2 | enters from top ← node 4
        sourcePosition: Position.Right,
        targetPosition: Position.Top,
        data: {
          phase: t("steps.capture.phase"),
          title: t("steps.capture.title"),
          line1: t("steps.capture.line1"),
          line2: t("steps.capture.line2"),
          accent: "terracota",
        },
      },
      {
        id: "2",
        type: "loopNode",
        position: p["2"],
        // Producción (top-right): exits bottom ↓ | enters from left ← node 1
        sourcePosition: Position.Bottom,
        targetPosition: isMobile ? Position.Top : Position.Left,
        data: {
          phase: t("steps.convert.phase"),
          title: t("steps.convert.title"),
          line1: t("steps.convert.line1"),
          line2: t("steps.convert.line2"),
          accent: "terracota",
        },
      },
      {
        id: "3",
        type: "loopNode",
        position: p["3"],
        // Inteligencia (bottom-right): exits left ← | enters from right (exterior) ← node 2
        sourcePosition: isMobile ? Position.Bottom : Position.Left,
        targetPosition: isMobile ? Position.Top    : Position.Right,
        data: {
          phase: t("steps.insights.phase"),
          title: t("steps.insights.title"),
          line1: t("steps.insights.line1"),
          line2: t("steps.insights.line2"),
          accent: "slate",
        },
      },
      {
        id: "4",
        type: "loopNode",
        position: p["4"],
        // Evolución (bottom-left): exits top ↑ → node 1 | enters from right ← node 3
        sourcePosition: Position.Top,
        targetPosition: isMobile ? Position.Top : Position.Right,
        data: {
          phase: t("steps.grow.phase"),
          title: t("steps.grow.title"),
          line1: t("steps.grow.line1"),
          line2: t("steps.grow.line2"),
          accent: "slate",
        },
      },
    ];
  }, [t, isMobile]);

  const [rfNodes, setRfNodes, onNodesChange] = useNodesState(computedNodes);
  const [rfEdges, , onEdgesChange] = useEdgesState(EDGES);

  // Sync React Flow state when computed nodes change (breakpoint or language switch)
  useEffect(() => {
    setRfNodes(computedNodes);
  }, [computedNodes, setRfNodes]);

  return (
    <ReactFlow
      nodes={rfNodes}
      edges={rfEdges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      fitView
      fitViewOptions={{ padding: 0.18 }}
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

// ── Outer section component ───────────────────────────────────────────────────

const Solution = () => {
  const { t } = useTranslation("solution");

  return (
    <section id="how-it-works" className="solution reveal">
      <div className="container solution__content">

        <div className="solution__header">
          <span className="section-label">{t("label")}</span>
          <h2 className="solution__title">
            {t("title")}{" "}
            <span className="solution__highlight">{t("highlight")}</span>
          </h2>
          <p className="solution__subtitle">{t("subtitle")}</p>
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
