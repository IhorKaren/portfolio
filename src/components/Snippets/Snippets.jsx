const Snippets = () => {
  return (
    <>
      {/* <h2>{'//'} Code snippet showcase:</h2> */}
      <pre>
        const ControllerWrapper = (ctrl) =&gt; &#123;
        <br /> const func = async (req, res, next) =&gt; &#123;
        <br />   try &#123;
        <br />     await ctrl(req, res, next);
        <br />   &#125; catch (error) &#123;
        <br />     next(error);
        <br />   &#125;
        <br /> &#125;;
        <br /> return func;
        <br />&#125;
      </pre>
    </>
  );
};

export default Snippets;
