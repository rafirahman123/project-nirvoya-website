import React from 'react';
import './Category.css';
import icon1 from '../../../image/icons/cat-icon1.png';
import icon2 from '../../../image/icons/cat-arrow.png';

const Category = () => {
    return (
        <section className='container mb-5'>
            <h4 className='text-start my-5'>Category</h4>
            <div className='row g-2 mb-2'>
                <div className='col-md-2 col-6 d-flex catagory-item  shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p>
                    <img className='category-img2' src={icon2} alt="" />
                </div>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>
            </div>
            <div className='row g-2 mb-2'>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>
            </div>
            <div className='row g-2 mb-2'>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>
                <div className='col-md-2 col-6 d-flex catagory-item shadow'>
                    <img className='category-img1' src={icon1} alt="" /><p className='category-text'>Health & Household</p><img className='category-img2' src={icon2} alt="" />
                </div>

            </div>
            {/* <div class="row g-2 mb-2">
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Health & Household</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid"><img src={icon1} alt="" /></label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Kids Fashion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid"><img src={icon1} alt="" /></label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Kids Fashion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid"><img src={icon1} alt="" /></label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Toys</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid"><img src={icon1} alt="" /></label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Groceries</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid"><img src={icon1} alt="" /></label>
                    </div>
                </div>
            </div> */}
            {/* <div class="row g-2 mb-2">
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Home & Lifestyle</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid"><img src={icon1} alt="" /></label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Men Fashion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid"><img src={icon1} alt="" /></label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Women’s Fashion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid"><img src={icon1} alt="" /></label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Stationary & Books</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid"><img src={icon1} alt="" /></label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Leather Goods</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid"><img src={icon1} alt="" /></label>
                    </div>
                </div>
            </div> */}
            {/* <div class="row g-2 mb-2">
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Jewelleries</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid"><img src={icon1} alt="" /></label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Watches</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid"><img src={icon1} alt="" /></label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Men Fashion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid"><img src={icon1} alt="" /></label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Tools & Hardware</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid"><img src={icon1} alt="" /></label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Pet Supplies</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid"><img src={icon1} alt="" /></label>
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default Category;