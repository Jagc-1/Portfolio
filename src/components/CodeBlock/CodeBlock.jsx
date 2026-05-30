const TOKEN_COLOR = {
  keyword: 'var(--accent2)',
  string:  'var(--accent3)',
  comment: 'var(--text-muted)',
  fn:      'var(--accent)',
  var:     '#f6c90e',
  plain:   'var(--text-secondary)',
};

const CODE_LINES = [
  { tokens: [{ t: 'comment', v: '// Johan Alexander Garcia Campos' }] },
  { tokens: [] },
  { tokens: [{ t: 'keyword', v: 'const' }, { t: 'plain', v: ' ' }, { t: 'var', v: 'dev' }, { t: 'plain', v: ' = {' }] },
  { tokens: [{ t: 'plain', v: '  ' }, { t: 'fn', v: 'nombre' }, { t: 'plain', v: ': ' }, { t: 'string', v: '"Johan Campos"' }, { t: 'plain', v: ',' }] },
  { tokens: [{ t: 'plain', v: '  ' }, { t: 'fn', v: 'rol' }, { t: 'plain', v: ': ' }, { t: 'string', v: '"Full Stack Developer"' }, { t: 'plain', v: ',' }] },
  { tokens: [{ t: 'plain', v: '  ' }, { t: 'fn', v: 'stack' }, { t: 'plain', v: ': [' }, { t: 'string', v: '"Vue"' }, { t: 'plain', v: ', ' }, { t: 'string', v: '"Java"' }, { t: 'plain', v: ', ' }, { t: 'string', v: '"Spring"' }, { t: 'plain', v: '],' }] },
  { tokens: [{ t: 'plain', v: '  ' }, { t: 'fn', v: 'disponible' }, { t: 'plain', v: ': ' }, { t: 'keyword', v: 'true' }, { t: 'plain', v: ',' }] },
  { tokens: [] },
  { tokens: [{ t: 'plain', v: '  ' }, { t: 'fn', v: 'construir' }, { t: 'plain', v: ': () => ({' }] },
  { tokens: [{ t: 'plain', v: '    ' }, { t: 'fn', v: 'frontend' }, { t: 'plain', v: ': ' }, { t: 'string', v: '"Vue, React + Tailwind"' }, { t: 'plain', v: ',' }] },
  { tokens: [{ t: 'plain', v: '    ' }, { t: 'fn', v: 'backend' }, { t: 'plain', v: ': ' }, { t: 'string', v: '"cSharp, Spring Boot + REST"' }, { t: 'plain', v: ',' }] },
  { tokens: [{ t: 'plain', v: '    ' }, { t: 'fn', v: 'db' }, { t: 'plain', v: ': ' }, { t: 'string', v: '"MySQL + PostgreSQL"' }, { t: 'plain', v: ',' }] },
  { tokens: [{ t: 'plain', v: '  })' }] },
  { tokens: [{ t: 'plain', v: '};' }] },
  { tokens: [] },
  { tokens: [{ t: 'comment', v: '// listo para el siguiente reto' }] },
];

const CodeLine = ({ tokens }) => (
  <div style={{ minHeight: '1.5rem' }}>
    {tokens.map((tok, i) => (
      <span key={i} style={{ color: TOKEN_COLOR[tok.t] || TOKEN_COLOR.plain }}>{tok.v}</span>
    ))}
  </div>
);

const CodeBlock = ({ visibleLines, showCursor }) => (
  <div className="code-block">
    <div className="terminal-dots">
      <span style={{ background: '#ff5f57' }} />
      <span style={{ background: '#febc2e' }} />
      <span style={{ background: '#28c840' }} />
    </div>
    {CODE_LINES.slice(0, visibleLines).map((line, i) => (
      <CodeLine key={i} tokens={line.tokens} />
    ))}
    {visibleLines < CODE_LINES.length && (
      <span style={{ color: 'var(--accent)', opacity: showCursor ? 1 : 0 }}>▋</span>
    )}
  </div>
);

export { CODE_LINES };
export default CodeBlock;