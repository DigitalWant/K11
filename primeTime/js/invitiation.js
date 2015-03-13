/**
 * Created by nova on 14-8-17.
 * Email: nova18.cn@gmail.com
 */
$(function() {
    $('#loadingObj')[0].addEventListener("touchmove", function(e) {
        e.preventDefault();
    }, false);


});

$(window).load(function() {

    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    var f = 0;
    var h = 0;
    var i = 0;
    var j = 0;
    var k = .33;
    var l = 0;
    var m = 0.015;
    var n = false;
    var o = 0;
    var p = 0;
    var q = false;
    var r = true;
    var s = $(window).height() >= $(window).width() ? $(window).height() : $(window).width();
    var t = $(window).height() <= $(window).width() ? $(window).height() : $(window).width();
    var u = true;
    var v = 0;
    var w = 0;
    var x = /\-?[0-9]+\.?[0-9]*/g;
    var y = 5;
    var z = true;
    var A = 0;
    var B = 0;
    var C = [{
        x: 100,
        y: 100,
        scale: .1
    }, {
        x: 200,
        y: 120,
        scale: .1
    }, {
        x: 380,
        y: 90,
        scale: .1
    }, {
        x: 120,
        y: 50,
        scale: .1
    }];
    window.addEventListener("resize", a8, true);
    a8();
    l = k;
    $('#wrap')[0].addEventListener("touchmove", function(a9) {
        a9.preventDefault()
    }, false);
    TweenMax.to("#loadingObj", 1, {
        alpha: 0,
        onComplete: function() {
            $("#loadingObj").hide()
        }
    });
    TweenMax.set($("#bird,#birdbody0,#birdbody1,#birdbody2"), {
        css: {
            'backgroundPosition': "center " + (s * .09) + "px"
        }
    });
    TweenMax.set($("#clould"), {
        css: {
            'backgroundPosition': t * .4 + "px " + (t * 1.2 / (640 / 3408) - (t * 1.2 / (640 / 3408) * .83)) + "px"
        }
    });
    TweenMax.set($("#skybg"), {
        css: {
            'backgroundPosition': "center " + (-s * .25) + "px"
        }
    });
    TweenMax.set($("#bird1"), {
        css: {
            'backgroundPosition': "15% " + (t * 1.2 / (640 / 3408) - (t * 1.2 / (640 / 3408) * .65)) + "px"
        }
    });
    TweenMax.set($("#car"), {
        css: {
            'backgroundPosition': "center " + (t * 1.2 / (640 / 3408) - (t * 1.2 / (640 / 3408) * .58)) + "px"
        }
    });
    TweenMax.set($("#birdx1"), {
        css: {
            'backgroundPosition': "20% " + (t * 1.2 / (640 / 3408) - (t * 1.2 / (640 / 3408) * .97)) + "px"
        }
    });
    a5(k);
    F();
    $("#bird1").hide();
    TweenMax.set($("#bird1"), {
        alpha: 0
    });
    $("#car").hide();
    TweenMax.set($("#car"), {
        alpha: 0
    });
    $(".hander").show();
    TweenMax.set($(".hander"), {
        alpha: 0
    });
    D($(".hander"));
    a3();
    $(".tips")[0].addEventListener("touchmove", function(a9) {
        a9.preventDefault()
    }, false);
    $(".sh_hit").click(function() {
        location.href = "invitation1.html?openid=" + openID;
    });
    $(".sh1bt").click(function() {
        H();
    });

    function D(a9) {
        TweenMax.to(a9, .5, {
            y: "5",
            onComplete: E,
            onCompleteParams: [a9]
        })
    };

    function E(a9) {
        TweenMax.to(a9, .5, {
            y: "-5",
            onComplete: D,
            onCompleteParams: [a9]
        })
    };

    function F() {};

    function G() {};

    function H() {
        l = 0;
        m = 0.02;
        I();
        u = false;
        TweenMax.to(".sh_head", 1, {
            y: -s * .18,
            onComplete: function() {
                $(".sh_head").hide()
            }
        });
        TweenMax.to(".sh_bottom", 1, {
            y: s * .37,
            onComplete: function() {
                $(".sh_bottom").hide();
                J()
            }
        });
    };

    function I() {
        if (k > l) k -= m;
        if (k < l && l > 0) k += m;
        if (k <= 0) {
            k = l;
            a5(k);
            return
        };
        a5(k);
        requestAnimationFrame(I)
    };

    function J() {
        TweenMax.set(".sh_tips", {
            alpha: 0
        });
        $(".sh_tips").show();
        $(".sh_pic1").show();
        TweenMax.to(".sh_tips", 1, {
            alpha: 1,
            onComplete: function() {
                $(".sh_tips")[0].addEventListener("touchend", P, false)
            }
        })
    };
    var K = 0,
        L = 0,
        M = 0,
        N = 0;

    function O(a9) {
        var b0 = a9.touches[0];
        K = b0.pageX;
        L = b0.pageY
    };

    function P(a9) {
        TweenMax.to(".sh_tips", .5, {
            alpha: 0,
            onComplete: function() {
                $(".sh_tips").hide();
                TweenMax.to($("#clould"), 1, {
                    css: {
                        'backgroundPosition': t * .4 + "px " + (t * 1.2 / (640 / 3408) - (t * 1.2 / (640 / 3408) * .84)) + "px"
                    }
                });
                TweenMax.to($("#bird,#birdbody0,#birdbody1,#birdbody2"), 1, {
                    css: {
                        'backgroundPosition': "center " + (s * .04) + "px"
                    }
                });
                TweenMax.to($("#skybg"), 1, {
                    css: {
                        'backgroundPosition': "center " + (-s * .35) + "px"
                    }
                });
                TweenMax.to($("#birdx1"), 1, {
                    css: {
                        'backgroundPosition': "20% " + (t * 1.2 / (640 / 3408) - (t * 1.2 / (640 / 3408) * .99)) + "px"
                    }
                });
                setTimeout(function() {
                    $('#wrap')[0].addEventListener("touchstart", Y, false);
                    $('#wrap')[0].addEventListener("touchmove", a0, false);
                    $('#wrap')[0].addEventListener("touchend", a1, false);
                    TweenMax.to($(".hander"), 1, {
                        alpha: 1
                    });
                    n = true
                }, 1000)
            }
        });
        $(".sh_tips")[0].removeEventListener("touchend", P, false);
    };

    function Q() {
        if (!o) {
            if (m > .0005) m -= .00005;
            if (k > l) k -= m;
            if (k < l && l > 0) k += m;
            if (k >= l) {
                k = l;
                a5(k);
                l = .51;
                m = .0009;
                R();
                return
            };
            a5(k);
            requestAnimationFrame(Q)
        }
    };

    function R() {
        if (!o) {
            if (k < l && l > 0) k += m;
            if (k >= l) {
                k = l;
                l = .46;
                m = .0008;
                S();
                a5(k);
                return
            };
            a5(k);
            requestAnimationFrame(R)
        }
    };

    function S() {
        if (!o) {
            if (k > l) k -= m;
            if (k <= l) {
                k = l;
                l = .54;
                m = .0008;
                R();
                a5(k);
                return
            };
            a5(k);
            requestAnimationFrame(S)
        }
    };

    function T() {
        if (k > l) k -= m;
        if (k < l && l > 0) k += m;
        if (k >= l) {
            k = l;
            a5(k);
            setTimeout(function() {
                U()
            }, 1000);
            return
        };
        a5(k);
        requestAnimationFrame(T)
    };

    function U() {
        z = false;
        TweenMax.to($("#skybg"), 2, {
            css: {
                'backgroundPosition': "center " + (-s * .35) + "px"
            },
            ease: Quart.easeInOut,
            onComplete: function() {
                $('#wrap')[0].addEventListener("touchstart", Y, false);
                $('#wrap')[0].addEventListener("touchmove", a0, false);
                $('#wrap')[0].addEventListener("touchend", a2, false);
                TweenMax.to($(".hander"), 1, {
                    alpha: 1
                });
                n = true
            }
        })
    };

    function V() {
        z = false;
        TweenMax.to($("#car"), 2, {
            css: {
                'backgroundPosition': "center " + (-s * .8) + "px"
            },
            ease: Quart.easeInOut
        });
        TweenMax.to($("#bird1"), 2, {
            css: {
                'backgroundPosition': "15% " + (-t * 1.2 / (640 / 3408) / 1.5) + "px"
            },
            ease: Quart.easeInOut
        });
        TweenMax.to($("#clould"), 2, {
            css: {
                'backgroundPosition': t * .4 + "px " + (-(t * 1.2 / (640 / 3408) * .6)) + "px"
            },
            ease: Quart.easeInOut
        });
        TweenMax.to($("#skybg"), 2, {
            css: {
                'backgroundPosition': "center " + (-t * 1.2 / (640 / 3408) / 1.5) + "px"
            },
            ease: Quart.easeInOut,
            onComplete: function() {
                W()
            }
        })
    };

    function W() {
        TweenMax.to($(".nav_menu"), 1, {
            alpha: 1
        });
        $(".gz_pic11").show();
        TweenMax.to($(".gz_pic11"), 1.5, {
            css: {
                "height": s
            },
            ease: Quart.easeInOut
        });
        $("#house1").show();
        TweenMax.set("#house1", {
            alpha: 0,
            y: "100"
        });
        TweenMax.to("#house1", 2, {
            alpha: 1,
            y: 0,
            onComplete: function() {
                setTimeout(X, 500);
                if (s < 504) {
                    TweenMax.to(".gz_pic11", 1, {
                        y: s - t / (640 / 1008)
                    })
                }
            },
            ease: Quart.easeInOut
        });
        TweenMax.set(".car", {
            x: -s * (640 / 1008)
        });
        $(".nav_menu").show();
        TweenMax.set($(".nav_menu"), {
            alpha: 0
        })
    };

    function X() {
        TweenMax.to(".car", 1, {
            x: 0
        })
    };
    e = parseInt($("#skybg").css('background-position-y'));
    h = parseInt($("#clould").css('background-position-y'));
    f = parseInt($("#bird").css('background-position-y'));
    i = parseInt($("#bird1").css('background-position-y'));
    A = parseInt($("#car").css('background-position-y'));
    B = parseInt($("#birdx1").css('background-position-y'));

    function Y(a9) {
        if (n) {
            var b0 = a9.touches[0];
            b = b0.pageX;
            j = b0.pageY;
            e = parseInt($("#skybg").css('background-position-y'));
            h = parseInt($("#clould").css('background-position-y'));
            f = parseInt($("#bird").css('background-position-y'));
            i = parseInt($("#bird1").css('background-position-y'));
            A = parseInt($("#car").css('background-position-y'));
            B = parseInt($("#birdx1").css('background-position-y'));
            z = true
        }
    };

    function Z(a9, b0) {
        TweenMax.to($("#birdbody" + a9), .5, {
            alpha: 0,
            onComplete: function() {
                $("#birdbody" + a9).hide()
            }
        });
        $("#birdbody" + b0).show();
        TweenMax.to($("#birdbody" + b0), .5, {
            alpha: 1
        })
    };

    function a0(a9) {
        var b0 = a9.touches[0];
        c = b0.pageY;
        a9.preventDefault();
        if (n) {
            var b1 = a9.touches[0];
            a = b1.pageX;
            c = b1.pageY;
            TweenMax.to($("#skybg"), .3, {
                css: {
                    'backgroundPosition': "center " + (-(j - c) + e) + "px"
                }
            });
            TweenMax.to($("#bird,#birdbody0,#birdbody1,#birdbody2"), .3, {
                css: {
                    'backgroundPosition': "center " + (-(j - c) * 1.5 + f) + "px"
                }
            });
            TweenMax.to($("#clould"), .3, {
                css: {
                    'backgroundPosition': t * .4 + "px " + (-(j - c) * 1.1 + h) + "px"
                }
            });
            TweenMax.to($("#bird1"), .3, {
                css: {
                    'backgroundPosition': "15% " + (-(j - c) * 1.1 + i) + "px"
                }
            });
            TweenMax.to($("#birdx1"), .3, {
                css: {
                    'backgroundPosition': "20% " + (-(j - c) * 1.1 + B) + "px"
                }
            });
            TweenMax.to($("#car"), .3, {
                css: {
                    'backgroundPosition': "center " + (-(j - c) + A) + "px"
                }
            });
            if (c - j > 0) {
                Z(0, 2);
                TweenMax.to($("#birdbody1"), .5, {
                    alpha: 0,
                    onComplete: function() {
                        $("#birdbody1").hide()
                    }
                })
            } else {
                Z(0, 1);
                TweenMax.to($("#birdbody2"), .5, {
                    alpha: 0,
                    onComplete: function() {
                        $("#birdbody2").hide()
                    }
                })
            }
        }
    };

    function a1(a9) {
        Z(2, 0);
        Z(1, 0);
        $('#wrap')[0].removeEventListener("touchstart", Y, false);
        $('#wrap')[0].removeEventListener("touchmove", a0, false);
        $('#wrap')[0].removeEventListener("touchend", a1, false);
        TweenMax.to($(".hander"), 1, {
            alpha: 0
        });
        z = false;
        V();
        e = parseInt($("#skybg").css('background-position-y'));
        h = parseInt($("#clould").css('background-position-y'));
        f = parseInt($("#bird").css('background-position-y'));
        i = parseInt($("#bird1").css('background-position-y'));
        A = parseInt($("#car").css('background-position-y'));
        B = parseInt($("#birdx1").css('background-position-y'));
        TweenMax.to($("#skybg"), 2, {
            css: {
                'backgroundPosition': "center " + (-(t * 1.2 / (640 / 3408) * .4)) + "px"
            },
            ease: Quart.easeInOut
        });
        TweenMax.to($("#bird,#birdbody0,#birdbody1,#birdbody2"), 2, {
            css: {
                'backgroundPosition': "center " + (-(t * 1.2 / (640 / 3408) * .4)) + "px"
            },
            onComplete: function() {
                $("#bird").hide();
                $("#birdbody0").hide();
                $("#birdbody1").hide();
                $("#birdbody2").hide()
            },
            ease: Quart.easeInOut
        });
        TweenMax.to($("#clould"), 2, {
            css: {
                'backgroundPosition': t * .4 + "px " + (-(t * 1.2 / (640 / 3408) * .2)) + "px"
            },
            ease: Quart.easeInOut
        });
        TweenMax.to($("#birdx1"), 2, {
            css: {
                'backgroundPosition': "20% " + (-(t * 1.2 / (640 / 3408) * .99)) + "px"
            },
            onComplete: function() {
                $("#birdx1").hide()
            },
            ease: Quart.easeInOut
        });
        TweenMax.to($("#car"), 2, {
            css: {
                'backgroundPosition': "center " + (s * .42) + "px"
            },
            onComplete: function() {
                $("#car").show();
                TweenMax.set($("#car"), {
                    scale: .8
                });
                TweenMax.to($("#car"), 1, {
                    scale: 1,
                    alpha: 1,
                    ease: Quart.easeInOut
                })
            },
            ease: Quart.easeInOut
        });
        TweenMax.to($("#bird1"), 2, {
            css: {
                'backgroundPosition': "15% " + (-(t * 1.2 / (640 / 3408) * .005)) + "px"
            },
            onComplete: function() {
                $("#bird1").show();
                TweenMax.set($("#bird1"), {
                    scale: .8
                });
                TweenMax.to($("#bird1"), 1, {
                    scale: 1,
                    alpha: 1,
                    onComplete: function() {
                        e = parseInt($("#skybg").css('background-position-y'));
                        h = parseInt($("#clould").css('background-position-y'));
                        f = parseInt($("#bird").css('background-position-y'));
                        i = parseInt($("#bird1").css('background-position-y'));
                        A = parseInt($("#car").css('background-position-y'));
                        B = parseInt($("#birdx1").css('background-position-y'));
                        setTimeout(function() {
                            $('#wrap')[0].addEventListener("touchstart", Y, false);
                            $('#wrap')[0].addEventListener("touchmove", a0, false);
                            $('#wrap')[0].addEventListener("touchend", a2, false);
                            TweenMax.to($(".hander"), 1, {
                                alpha: 1
                            })
                        }, 800)
                    }
                })
            },
            ease: Quart.easeInOut
        });
        $('#wrap')[0].removeEventListener("touchstart", Y, false);
        $('#wrap')[0].removeEventListener("touchmove", a0, false);
        $('#wrap')[0].removeEventListener("touchend", a1, false)
    };

    function a2(a9) {
        z = false;
        n = false;
        $('#wrap')[0].removeEventListener("touchstart", Y, false);
        $('#wrap')[0].removeEventListener("touchmove", a0, false);
        $('#wrap')[0].removeEventListener("touchend", a2, false);
        $('#wrap')[0].removeEventListener("touchend", a1, false);
        TweenMax.to($(".hander"), 1, {
            alpha: 0
        });
        V()
    };

    function a3() {
        if (z && n) {
            if (parseInt($("#skybg").css('background-position-y')) >= -y) {
                TweenMax.set($("#skybg"), {
                    css: {
                        'backgroundPosition': "center " + (-y) + "px"
                    }
                });
                TweenMax.set($("#bird,#birdbody0,#birdbody1,#birdbody2"), {
                    css: {
                        'backgroundPosition': "center " + (s * .52) + "px"
                    }
                });
                TweenMax.set($("#clould"), {
                    css: {
                        'backgroundPosition': t * .4 + "px " + (s * .8) + "px"
                    }
                });
                TweenMax.set($("#bird1"), {
                    css: {
                        'backgroundPosition': "15% " + ((t * 1.2 / (640 / 3408) - (t * 1.2 / (640 / 3408) * .62))) + "px"
                    }
                });
                TweenMax.set($("#birdx1"), {
                    css: {
                        'backgroundPosition': "20% " + ((t * 1.2 / (640 / 3408) - (t * 1.2 / (640 / 3408) * .91))) + "px"
                    }
                })
            };
            if (parseInt($("#skybg").css('background-position-y')) < -(t * 1.2 / (640 / 3408)) + s) {
                TweenMax.set($("#skybg"), {
                    css: {
                        'backgroundPosition': "center " + (-(t * 1.2 / (640 / 3408)) + s) + "px"
                    }
                });
                TweenMax.set($("#bird,#birdbody0,#birdbody1,#birdbody2"), {
                    css: {
                        'backgroundPosition': "center " + (-(t * 1.37 / (640 / 3408)) + s) + "px"
                    }
                });
                TweenMax.set($("#clould"), {
                    css: {
                        'backgroundPosition': t * .4 + "px " + (-(t * 1.23 / (640 / 3408)) + s) + "px"
                    }
                });
                TweenMax.set($("#bird1"), {
                    css: {
                        'backgroundPosition': "15% " + (-((t * 1.23 / (640 / 3408))) * 1.1 + i) + "px"
                    }
                });
                TweenMax.set($("#birdx1"), {
                    css: {
                        'backgroundPosition': "15% " + (-((t * 1.23 / (640 / 3408))) * 1.1 + B) + "px"
                    }
                })
            }
        };
        requestAnimationFrame(a3)
    };
    var a4 = 0;

    function a5(a9) {
        if (a9 >= 0) {
            p = a9;
            a4 = a9;
        }
    };

    function a6() {};

    function a7() {};

    function a8() {
        if ($(window).width() <= $(window).height()) {
            $(".tips").hide();
            s = $(window).height() >= $(window).width() ? $(window).height() : $(window).width();
            t = $(window).height() <= $(window).width() ? $(window).height() : $(window).width();

        } else {
            s = $(window).height() >= $(window).width() ? $(window).height() : $(window).width();
            t = $(window).height() <= $(window).width() ? $(window).height() : $(window).width();
            $(".tips").show()
        }
    }


})

requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback) {
        setTimeout(callback, 1000 / 60);
    };