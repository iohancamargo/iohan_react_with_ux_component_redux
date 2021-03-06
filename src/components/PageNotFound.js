import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { useSelector } from 'react-redux';

const PageNotFound = () => {
    const listProducts = useSelector(state => state.products);
    console.log('listProducts', listProducts);
    /* Estudar maneira de passar todos esses efetivos para react
        var parallax = function(e) {
            var windowWidth = $(window).width();
            if (windowWidth < 768) return;
            var halfFieldWidth = $(".parallax").width() / 2,
            halfFieldHeight = $(".parallax").height() / 2,
            fieldPos = $(".parallax").offset(),
            x = e.pageX,
            y = e.pageY - fieldPos.top,
            newX = (x - halfFieldWidth) / 30,
            newY = (y - halfFieldHeight) / 30;
            $('.parallax [class*="wave"]').each(function(index) {
            $(this).css({
                transition: "",
                transform:
                "translate3d(" + index * newX + "px," + index * newY + "px,0px)"
            });
            });
        },
        stopParallax = function() {
            $('.parallax [class*="wave"]').css({
            transform: "translate(0px,0px)",
            transition: "all .7s"
            });
            $timeout(function() {
            $('.parallax [class*="wave"]').css("transition", "");
            }, 700);
        };
        $(document).ready(function() {
        $(".not-found").on("mousemove", parallax);
        $(".not-found").on("mouseleave", stopParallax);
        });
    */


    return (
        <div className="not-found parallax">
            <div className="sky-bg"></div>
            <div className="wave-7"></div>
            <div className="wave-6"></div>

            <Link to="/" className="wave-island">
                <img src="/images/island.svg" alt="Island" />
            </Link>
            <div className="wave-5"></div>
            <div className="wave-lost wrp">
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </div>

            <div className="wave-4"></div>
            <div className="wave-boat">
                <img className="boat" src="/images/boat.svg" alt="Boat" />
            </div>
            <div className="wave-3"></div>
            <div className="wave-2"></div>
            <div className="wave-1"></div>
            <div className="wave-message">
                <p>Your're lost</p>
                <p>Click on the island to return</p>
            </div>
        </div>
    );
};

export default withRouter(PageNotFound);
