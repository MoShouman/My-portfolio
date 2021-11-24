const floatingBtn = {
    position:'fixed',
    bottom:'0px',
    right:'3px',
    padding: '16px 16px !important',
    borderRadius: '50%',
    fontSize:'40px'
}

function FloatingBtn() {
  return ( <a alt='floatBtn' href='#navBar' style={floatingBtn}><i style={{color:'rgb(0,205,203)'}} className="fas fa-arrow-circle-up"></i></a>);
}

export default FloatingBtn;
